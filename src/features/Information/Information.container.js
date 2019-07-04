import React, { Component, createRef, Fragment } from 'react'
import {
  View,
  Text,
  FlatList,
  Animated,
  StatusBar,
  Dimensions,
  ScrollView,
  PanResponder,
  findNodeHandle,
  ImageBackground,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BlurView } from '@react-native-community/blur'
import SafeAreaView from 'react-native-safe-area-view'
import Carousel from 'react-native-snap-carousel'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { scale } from '../../utils'
import { Colors } from '../../constants'
import styles from './Information.styles'
import {
  IconButton,
  Comment,
  Rating,
  Tag
} from '../../components'

const LEAF_ICON = require('../../assets/images/icon/leaf.png')
const MINT_IMAGE = require('../../assets/images/herbs/mint.jpg')
const LEMON_IMAGE = require('../../assets/images/herbs/lemon.jpg')
const LETTUCE_IMAGE = require('../../assets/images/herbs/lettuce.jpg')
const COMMENT_ICON = require('../../assets/images/icon/comment.png')

const mockupData = {
  name: 'Mint (มิ้น)',
  tags: ['Yellow', 'Summer'],
  images: [
    MINT_IMAGE,
    LEMON_IMAGE,
    LETTUCE_IMAGE
  ],
  comments: [
    {
      rating: 4,
      name: 'Boris',
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      rating: 1,
      name: 'Oatmeal',
      comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
      rating: 3,
      name: 'Oatmeal',
      comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
  ],
  info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
}

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
    router: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),
    botanicalInfo: PropTypes.object,
  }

  static defaultProps = {
    router() { },
    botanicalInfo: mockupData,
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
    this.props.router.pop()
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
    const { botanicalInfo } = this.props
    const { tags } = botanicalInfo

    return tags.map((tag, index) => <Tag key={`${tag}-${index}`} text={tag} />)
  }

  renderContentButton = () => {
    const opacityComment = this.animatedContentTaggle.interpolate({
      inputRange: [0, 0.5],
      outputRange: [1, 0]
    })

    const translateYComment = this.animatedContentTaggle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 44]
    })


    const opacityInfo = this.animatedContentTaggle.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0, 1]
    })

    const translateYInfo = this.animatedContentTaggle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -44]
    })

    return (
      <View style={styles.contentButtonWarper}>
        <Animated.View style={{ opacity: opacityComment, transform: [{ translateY: translateYComment }] }}>
          <IconButton
            icon={COMMENT_ICON}
            iconSize={32}
            onPress={this.onToggleContent(SHOWING_CONTENTS.INFO, 1)} />
        </Animated.View>
        <Animated.View style={{ opacity: opacityInfo, transform: [{ translateY: translateYInfo }] }}>
          <IconButton
            icon={LEAF_ICON}
            iconSize={32}
            onPress={this.onToggleContent(SHOWING_CONTENTS.COMMENT, 0)} />
        </Animated.View>
      </View>
    )
  }

  renderContentData = () => {
    const screenWidth = Dimensions.get('screen').width
    const contentWidth = (screenWidth - ((scale(25) * 2) + (scale(30) * 2)))
    const { botanicalInfo } = this.props
    const { info, comments } = botanicalInfo

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
            <Text style={styles.infoText} >{info}</Text>
          </ScrollView>
        </Animated.View>
        <Animated.View style={{ opacity: opacityComment, transform: [{ translateX: translateYComment }] }}>
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
    const ContentButton = this.renderContentButton
    const ContentData = this.renderContentData
    const { imageHasLoaded } = this.state
    const { botanicalInfo } = this.props
    const { name } = botanicalInfo
    const Tags = this.renderTags

    const minMarginTop = scale(120)
    const maxMarginTop = (screenHeight - scale(260))

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
          blurAmount={15} />
        <View style={styles.panIndicatorWarpper} {...this.panResponder.panHandlers} >
          <View style={styles.panIndicator} />
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.titleWarpper}>
            <Text style={styles.nameText}>{name}</Text>
            <ContentButton />
          </View>
          <View style={styles.ratingWarpper}>
            <Rating rating={3} />
          </View>
          <View style={styles.tagsWarpper}>
            <Tags />
          </View>
          <ContentData />
        </View>
      </Animated.View>
    )
  }

  renderImagesBackground = () => {
    const screenWidth = Dimensions.get('screen').width
    const { botanicalInfo } = this.props
    const { images } = botanicalInfo

    const renderImages = (image) =>
      <ImageBackground
        onLoadEnd={this.onBackgroundLoaded}
        key={`image-background-${image.index}`}
        style={styles.imageBackground}
        source={image.item}
        resizeMode='cover'>
        <View style={styles.transparentSpace} />
        <LinearGradient
          colors={[Colors.BLACK, Colors.BLACK_TRANSPARENT, Colors.TRANSPARENT]}
          style={styles.linearSpace}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }} />
      </ImageBackground>

    return (
      <View style={styles.imageBackgroundWarpper}>
        <Carousel
          ref={this.imagesRef}
          data={images}
          renderItem={renderImages}
          sliderWidth={screenWidth}
          itemWidth={screenWidth} />
      </View>
    )
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

export default Information