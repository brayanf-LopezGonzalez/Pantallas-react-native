import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors, textStyles } from '../theme'

export default function Button({ text, onPress, variant = 'primary' }) {
  const isPrimary = variant === 'primary'

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, isPrimary ? styles.primary : styles.secondary]}
    >
      <Text
        style={[
          textStyles.labelLg,
          { color: isPrimary ? colors.surface : colors.textPrimary },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.primary },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
})