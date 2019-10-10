import React, {
  useRef,
  useEffect,
  useState,
} from 'react'
import {
  View,
  Text,
  Image,
  Keyboard,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import {
  ModalController,
  IconButton,
  Rating,
  Tag,
} from '@components'
import { Login } from '@features'
import SafeAreaView from 'react-native-safe-area-view'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import Colors from '@colors'
import { project } from '@constants'
import { getUser } from '@redux/user'
import { addReview, clearReview } from '@redux/review'

import styles from './Review.style'

const SEND_ICON = require('@images/icon/send.png')
const BACK_ICON = require('@images/icon/left-arrow.png')
const INACTIVE_STAR_ICON = require('@images/icon/star-inactive.png')
const ACTIVE_STAR_ICON = require('@images/icon/star-active.png')

const Review = (props) => {

  const safeAreaViewRef = useRef(null)
  const reviewInputRef = useRef(null)
  const [commentText, setCommentText] = useState('')
  const [commentRating, setCommentRating] = useState(0)

  const { navigator, plant } = props

  const dispatch = useDispatch()
  const userCode = useSelector(state => state[project.name].user.code)
  const reviewCode = useSelector(state => state[project.name].review.code)
  const reviewFetching = useSelector(state => state[project.name].review.isFetching)

  useEffect(() => {
    return () => {
      Keyboard.dismiss()
      dispatch(clearReview())
    }
  }, [])

  useEffect(() => {
    if (userCode === null) {
      dispatch(getUser())
    } else if (userCode !== 200) {
      openLogin()
    } else if (userCode === 200) {
      if (reviewInputRef) {
        reviewInputRef.current.focus()
      }
    }
  }, [userCode])

  useEffect(() => {
    if (reviewCode === 200 && !reviewFetching) {
      Keyboard.dismiss()
      props.onReviewSuccess()
      navigator.pop()
    }
  }, [reviewCode, reviewFetching])

  const onPressBack = () => {
    navigator.pop()
  }

  openLogin = () => {
    const scene = () => <Login onCancel={onCancelLogin} onRegisteredSuccess={onSuccessLogin} backgroundRef={safeAreaViewRef} />
    ModalController.show({ child: scene })
  }

  onCancelLogin = () => {
    ModalController.hide()
    navigator.pop()
  }

  onSuccessLogin = () => {
    ModalController.hide()
    if (reviewInputRef) {
      reviewInputRef.current.focus()
    }
  }

  onChangeText = (text) => {
    setCommentText(text)
  }

  onPressRating = (rating) => {
    setCommentRating(rating)
  }

  onSubmitComment = () => {
    dispatch(addReview({ _id: plant._id, rating: commentRating, comment: commentText }))
  }

  const name = _.get(plant, 'name', '')
  const tags = _.get(plant, 'tags', [])
  const rating = _.get(plant, 'rating', 0)
  const images = _.get(plant, 'images', [])
  const imageUri = _.head(images.map(im => ({ uri: im })))

  Tags = () => {
    return tags.map((tag, index) => <Tag key={`${tag}-${index}`} text={tag} />)
  }

  CommentRating = () => [1, 2, 3, 4, 5].map(rate => (
    <IconButton
      key={rate}
      icon={rate > commentRating ? INACTIVE_STAR_ICON : ACTIVE_STAR_ICON}
      tintColor={rate > commentRating ? Colors.GRAY_D5 : Colors.GREEN_DARKFADE}
      iconSize={26}
      size={28}
      onPress={() => onPressRating(rate)} />
  ))

  const isHaveComment = commentText.length > 3

  return (
    <SafeAreaView
      ref={safeAreaViewRef}
      forceInset={{ vertical: 'always' }}
      style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerWrapper}>
        <IconButton
          icon={BACK_ICON}
          tintColor={Colors.BLACK}
          iconSize={20}
          onPress={onPressBack} />
        <Text style={styles.sceneText}>Write Your Review</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.plantDetailContainer}>
          <Image source={imageUri} style={styles.image} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{name}</Text>
            <View style={styles.tagsWarpper}>
              <Tags />
            </View>
            <View style={styles.ratingWarpper}>
              <Rating rating={rating} color={Colors.BLACK_TRANSPARENT} />
            </View>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.reviewBoxContainer}>
          {/* <View style={styles.commentRatingDescriptWrapper}>
            <Text styl={styles.ratingDescText}>Rating: {commentRating}</Text>
          </View> */}
          <View style={styles.commentRatingWrapper}>
            <CommentRating />
          </View>
          <View style={styles.commentFieldWarpper}>
            <TextInput
              ref={reviewInputRef}
              onChangeText={onChangeText}
              multiline={true}
              maxLength={255}
              placeholder='Reviews...'
              style={styles.commentField}
            />
            <IconButton
              tintColor={Colors.GREEN_DARKFADE}
              disabled={!isHaveComment}
              onPress={onSubmitComment}
              icon={SEND_ICON}
              iconSize={20}
              size={22} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Review