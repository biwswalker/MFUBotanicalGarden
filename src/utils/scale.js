import { Dimensions } from 'react-native'
import ratio from './ratio'

// Screen size measurement
const MEASURE = {
  5: {
    width: 320,
    height: 569
  },
  6: {
    width: 375,
    height: 667
  },
  '6 Plus': {
    width: 375,
    height: 667
  },
  7: {
    width: 375,
    height: 667
  },
  '7 Plus': {
    width: 414,
    height: 736
  },
  8: {
    width: 375,
    height: 667
  },
  '8 Plus': {
    width: 414,
    height: 736
  },
  x: {
    width: 375,
    height: 812
  }
}

// Size enum
export const FROM_SIZE = {
  IPHONE_5: '5',
  IPHONE_6: '6',
  IPHONE_6_PLUS: '6 Plus',
  IPHONE_7: '7',
  IPHONE_7_PLUS: '7 Plus',
  IPHONE_8: '8',
  IPHONE_8_PLUS: '8 Plus',
  IPHONE_X: 'x'
}

// Default screen width from design
const DEFAULT_SCREEN_WIDTH = MEASURE[FROM_SIZE.IPHONE_X].width

// Default screen height from design
const DEFAULT_SCREEN_HEIGHT = MEASURE[FROM_SIZE.IPHONE_X].height

// Max screen width from generation plus
const MAX_SCREEN_WIDTH = MEASURE[FROM_SIZE.IPHONE_X].width

// Max screen height from iphone x
const MAX_SCREEN_HEIGHT = MEASURE[FROM_SIZE.IPHONE_X].height

// Get current screen width
const { width, height } = Dimensions.get('screen')

/**
 * Normalize to current size of screen
 * 
 * @param {number} size 
 * @param {string} baseSize 
 */
const normalizeToBaseSize = (size, fromSize) => (
  (fromSize !== FROM_SIZE.IPHONE_X)
    ? ratio(MEASURE[fromSize].width, size, DEFAULT_SCREEN_WIDTH)
    : size
)

/**
 * Map style properties with formular to normalize size
 * 
 * @param {number} size 
 * @param {string} property 
 */
const normalizeWithProp = (size, property) => (fromSize) => {
  
  const normalizeBaseSize = normalizeToBaseSize(size, fromSize)
  
  switch (property) {
    case 'vertical': {
      const usedHeight = height >= MAX_SCREEN_HEIGHT ? MAX_SCREEN_HEIGHT : height
      return Math.round((normalizeBaseSize * usedHeight) / DEFAULT_SCREEN_HEIGHT)
    }
    default: {
      const usedWidth = width >= MAX_SCREEN_WIDTH ? MAX_SCREEN_WIDTH : width
      return Math.round((normalizeBaseSize * usedWidth) / DEFAULT_SCREEN_WIDTH)
    }
  }
}

/**
 * Normalize any size of {width, fontSize, etc} from current screen width
 *
 * @param {number} size
 *
 * @return {number}
 *
 * ? Explain formular
 * ? ---
 * ? Let multiple size by current widh and divided by default screen width
 * ?  from design is 375px so we will get new size from current width.
 */
export default (size, property = '', fromSize = FROM_SIZE.IPHONE_X) => normalizeWithProp(size, property)(fromSize)
