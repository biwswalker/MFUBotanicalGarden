import React, { Component, createRef, Fragment } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  StatusBar,
  Dimensions,
  ScrollView,
  PanResponder,
  findNodeHandle,
  ImageBackground,
  TouchableHighlight,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BlurView } from '@react-native-community/blur'
import SafeAreaView from 'react-native-safe-area-view'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { scale } from '@utils'
import { Colors, project } from '@constants'
import { getPlantInfo, clearPlant } from '@redux/plant'
import {
  IconButton,
  Comment,
  Rating,
  Tag
} from '@components'
import styles from './Information.styles'

const LEAF_ICON = require('@images/icon/leaf.png')
const COMMENT_ICON = require('@images/icon/comment.png')
const NEXT_ICON = require('@images/icon/next.png')
const PREVIOUS_ICON = require('@images/icon/previous.png')

const SHOWING_CONTENTS = {
  INFO: 'info',
  COMMENT: 'comment'
}

const screenHeight = Dimensions.get('screen').height
const MAXIMUM_MARGIN_TOP = (screenHeight - scale(220))

const MINIMUM_EXPANDED = 180
const MINIMUM_COLLAPSE = -80

class Information extends Component {

  static propTypes = {
    navigator: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),
    onPresBackCallback: PropTypes.func,
    clearupData: PropTypes.func,
    getPlant: PropTypes.func,
    plant: PropTypes.object,
    plantId: PropTypes.string,
  }

  static defaultProps = {
    onPresBackCallback() { },
    clearupData() { },
    navigator() { },
    getPlant() { },
    plant: {},
    plantId: '',
  }

  constructor(props) {
    super(props)
    this.viewBlur = createRef()
    this.imagesRef = createRef()
    this.state = {
      viewRef: 0,
      imageHasLoaded: false,
      currentContent: SHOWING_CONTENTS.INFO
    }
    this.animatedFadeInOpacity = new Animated.Value(0)
    this.animatedContentTaggle = new Animated.Value(0)
    this.animatedPan = new Animated.Value(0)

    this.panResponder = this.createPanResponder()
    this.isDragingSuccess = false
    this.isExpanded = false
  }

  componentDidMount() {
    const { plantId, getPlant } = this.props
    getPlant(plantId)
  }

  componentWillUnmount() {
    this.props.clearupData()
  }
  /**
   * Start PanResponder Handle
   */

  createPanResponder = () => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: this.onMoving,
    onPanResponderRelease: this.onRelease,
    // Handle when panResponder was cancelled
    onPanResponderTerminate: this.onRelease,
  })

  onMoving = (_, gestureState) => {
    const yAxis = -gestureState.dy
    const yAxisBack = MAXIMUM_MARGIN_TOP + yAxis
    if (!this.isExpanded) {
      return this.animatedPan.setValue(yAxis)
    }
    return this.animatedPan.setValue(yAxisBack)
  }

  onRelease = (event, gestureState) => {
    const yAxis = -gestureState.dy

    if (yAxis < MINIMUM_EXPANDED && yAxis >= 0) {
      // Collapse
      Animated.spring(this.animatedPan, { toValue: 0 }).start(() => {
        this.isExpanded = false
      })
    }
    else if (yAxis < MINIMUM_COLLAPSE) {
      // Collapse
      Animated.spring(this.animatedPan, { toValue: 0 }).start(() => {
        this.isExpanded = false
      })
    } else {
      // Expanded
      Animated.spring(this.animatedPan, { toValue: MAXIMUM_MARGIN_TOP }).start(() => {
        this.isExpanded = true
      })
    }
  }

  /**
   * End PanResponder Handle
   */

  onPressClose = () => {
    this.props.onPresBackCallback()
    this.props.navigator.pop()
  }

  onBackgroundLoaded = () => {
    this.setState({
      viewRef: findNodeHandle(this.viewBlur.current),
      imageHasLoaded: true,
    }, this.startAnimatedFadeIn)
  }

  onToggleContent = (currentContent, toValue) => () => {
    this.setState({ currentContent }, this.startAnimatedContentTaggle(toValue))
  }

  onReviewSuccess = () => {
    const { plantId, getPlant } = this.props
    getPlant(plantId)
  }

  onPreeReview = () => {
    const { plant, navigator } = this.props
    navigator.push('Review', { plant, onReviewSuccess: this.onReviewSuccess }, { animation: 'right' })
  }

  startAnimatedFadeIn = () => {
    Animated.timing(this.animatedFadeInOpacity, {
      toValue: 1,
      duration: 405,
    }).start()
  }

  startAnimatedContentTaggle = (toValue = 1) => () => {
    Animated.timing(this.animatedContentTaggle, {
      toValue: toValue,
      duration: 540,
    }).start()
  }

  keyExtractorComments = (item, index) => `${item.name}-${index}`

  renderComments = ({ item: { rating, name, comment }, index }) =>
    <Comment
      key={`${name}-${index}`}
      comment={comment}
      rating={rating}
      name={name} />

  renderTags = () => {
    const { plant } = this.props
    const { tags } = plant

    return tags.map((tag, index) => <Tag key={`${tag}-${index}`} text={tag} />)
  }

  renderContentButton = () => {
    const opacityComment = this.animatedContentTaggle.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0, 1]
    })

    const translateYComment = this.animatedContentTaggle.interpolate({
      inputRange: [0, 1],
      outputRange: [44, 0]
    })

    return (
      <View style={styles.contentButtonWarper}>
        <Animated.View style={[styles.buttonWrapper, { opacity: opacityComment, transform: [{ translateY: translateYComment }] }]}>
          <IconButton
            icon={COMMENT_ICON}
            iconSize={32}
            onPress={() => this.onPreeReview()} />
        </Animated.View>
      </View>
    )
  }

  renderContentData = () => {
    const screenWidth = Dimensions.get('screen').width
    const contentWidth = (screenWidth - ((scale(25) * 2) + (scale(30) * 2)))
    const { plant } = this.props
    const {
      botanicalDetail,
      scientificName,
      familyName,
      anotherName,
      properties,
      comments
    } = plant

    const translateYInfo = this.animatedContentTaggle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, (-contentWidth - 30)]
    })

    const translateYComment = this.animatedContentTaggle.interpolate({
      inputRange: [0, 1],
      outputRange: [30, -contentWidth]
    })

    const opacityInfo = this.animatedContentTaggle.interpolate({
      inputRange: [0, 0.5],
      outputRange: [1, 0]
    })

    const opacityComment = this.animatedContentTaggle.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0, 1]
    })

    return (
      <View style={styles.contentDataWarpper}>
        <Animated.View style={{ opacity: opacityInfo, transform: [{ translateX: translateYInfo }] }}>
          <ScrollView
            style={styles.infoWarpper}
            showsVerticalScrollIndicator={false} >
            {
              !_.isEmpty(anotherName)
              && <>
                <Text style={styles.infoTextTitle} >ชื่ออื่น</Text>
                <Text style={styles.infoText} >{anotherName}</Text>
              </>
            }
            {
              !_.isEmpty(scientificName)
              && <>
                <Text style={styles.infoTextTitle} >ชื่อวิทยาศาสตร์</Text>
                <Text style={styles.infoText} >{scientificName}</Text>
              </>
            }
            {
              !_.isEmpty(familyName)
              && <>
                <Text style={styles.infoTextTitle} >ชื่อวงศ์</Text>
                <Text style={styles.infoText} >{familyName}</Text>
              </>
            }
            {
              !_.isEmpty(botanicalDetail)
              && <>
                <Text style={styles.infoTextTitle} >ลักษณะทางพฤกษศาสตร์</Text>
                <Text style={styles.infoText} >{botanicalDetail}</Text>
              </>
            }
            {
              !_.isEmpty(properties)
              && <>
                <Text style={styles.infoTextTitle} >สรรพคุณ</Text>
                <Text style={styles.infoText} >{properties}</Text>
              </>
            }
          </ScrollView>
        </Animated.View>
        <Animated.View style={{ width: contentWidth, opacity: opacityComment, transform: [{ translateX: translateYComment }] }}>
          <FlatList
            keyExtractor={this.keyExtractorComments}
            renderItem={this.renderComments}
            style={styles.infoWarpper}
            data={comments} />
        </Animated.View>
      </View>
    )
  }

  renderContent = () => {
    const screenHeight = Dimensions.get('screen').height
    const screenWidth = Dimensions.get('screen').width
    const contentWidth = (screenWidth - ((scale(25) * 2) + (scale(30) * 2)))
    const tabWidth = ((contentWidth / 2) - 4)
    const ContentButton = this.renderContentButton
    const ContentData = this.renderContentData
    const { imageHasLoaded } = this.state
    const { plant } = this.props
    const name = _.get(plant, 'name', '')
    const rating = _.get(plant, 'rating', 0)
    const Tags = this.renderTags

    const minMarginTop = scale(220)
    const maxMarginTop = (screenHeight - scale(440))

    if (!imageHasLoaded) {
      return <Fragment />
    }

    const marginTop = this.animatedPan.interpolate({
      inputRange: [0, (maxMarginTop - 80)],
      outputRange: [maxMarginTop, minMarginTop],
    })

    const fadeInOpacity = this.animatedFadeInOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    const fadeInTranslate = this.animatedFadeInOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [40, 0]
    })

    const sliderTabTransition = this.animatedContentTaggle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, (tabWidth + 4)]
    })

    return (
      <Animated.View style={[styles.contentContainer, {
        transform: [{ translateY: fadeInTranslate }],
        opacity: fadeInOpacity,
        marginTop,
      }]} >
        <BlurView
          viewRef={this.state.viewRef}
          style={styles.blurComponent}
          blurType='light'
          blurAmount={70} />
        <View style={styles.panIndicatorWarpper} {...this.panResponder.panHandlers} >
          <View style={styles.panIndicator} />
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.titleWarpper}>
            <Text style={styles.nameText}>{name}</Text>
            <ContentButton />
          </View>
          <View style={styles.tagsWarpper}>
            <Tags />
          </View>
          <View style={styles.ratingWarpper}>
            <Rating rating={rating} />
          </View>
          <View style={styles.tabsWrapper}>
            <View style={styles.tabsContainer}>
              <Animated.View style={[styles.activeTab, { width: tabWidth, transform: [{ translateX: sliderTabTransition }] }]} />
              <TouchableHighlight
                style={styles.tabTextWrapper}
                underlayColor={Colors.WHITE_FA_TRANSPARENTER}
                onPress={this.onToggleContent(SHOWING_CONTENTS.INFO, 0)}>
                <Text style={styles.tabText}>Information</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.tabTextWrapper}
                underlayColor={Colors.WHITE_FA_TRANSPARENTER}
                onPress={this.onToggleContent(SHOWING_CONTENTS.INFO, 1)}>
                <Text style={styles.tabText}>Reviews</Text>
              </TouchableHighlight>
            </View>
          </View>
          <ContentData />
        </View>
      </Animated.View>
    )
  }

  renderImagesBackground = () => {
    const screenWidth = Dimensions.get('screen').width
    const { plant } = this.props
    const images = _.get(plant, 'images', [])

    const imageUris = images.map(im => ({ uri: im }))
    const renderImages = (image) =>
      <ImageBackground
        onLoadEnd={this.onBackgroundLoaded}
        key={`image-background-${image.index}`}
        style={styles.imageBackground}
        source={image.item}
        resizeMode='cover'>
        {/* <View style={styles.transparentSpace} /> */}
        <LinearGradient
          colors={[Colors.BLACK, Colors.BLACK_TRANSPARENT_LIGHTNEST, Colors.TRANSPARENT]}
          style={styles.linearSpace}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }} />
      </ImageBackground>

    return (
      <View style={styles.imageBackgroundWarpper}>
        <Carousel
          ref={this.imagesRef}
          data={imageUris}
          renderItem={renderImages}
          sliderWidth={screenWidth}
          itemWidth={screenWidth} />
      </View>
    )
  }

  onNextImage = () => {
    if (!_.isEmpty(this.imagesRef)) {
      this.imagesRef.current.snapToNext()
    }
  }

  onPrevImage = () => {
    if (!_.isEmpty(this.imagesRef)) {
      this.imagesRef.current.snapToPrev()
    }
  }

  render() {
    const Content = this.renderContent
    const ImagesBackground = this.renderImagesBackground
    return (
      <SafeAreaView
        forceInset={{ bottom: 'never' }}
        style={styles.container} >
        <StatusBar barStyle='light-content' />
        <View style={styles.backgroundContainer} ref={this.viewBlur}>
          <ImagesBackground />
          <View style={styles.imageIndicatorWrapper} pointerEvents="box-none">
            <View style={styles.imageDirectionIndicatorWrapper}>
              <IconButton
                icon={PREVIOUS_ICON}
                iconSize={20}
                opacity={0.3}
                onPress={this.onPrevImage} />
              <IconButton
                icon={NEXT_ICON}
                iconSize={20}
                opacity={0.3}
                onPress={this.onNextImage} />
            </View>
          </View>
          <View style={styles.emptyBackground} />
        </View>
        <View style={styles.navbarContainer}>
          <IconButton onPress={this.onPressClose} />
        </View>
        <Content />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  plant: state[project.name].plant.data
})

const mapDispatchToProp = {
  getPlant: getPlantInfo,
  clearupData: clearPlant,
}

export default connect(mapStateToProps, mapDispatchToProp)(Information)