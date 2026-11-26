import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, textStyles } from '../theme'

export default function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  error,
  labelRight,
}) {
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'

  const borderColor = error
    ? colors.error
    : focused
      ? colors.primary
      : colors.border

  const keyboardType =
    type === 'email' ? 'email-address' : type === 'tel' ? 'phone-pad' : 'default'

  return (
    <View style={styles.wrapper}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {labelRight}
      </View>
      <View
        style={[
          styles.field,
          { borderColor, borderWidth: focused || error ? 1.5 : 1 },
        ]}
      >
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          secureTextEntry={isPassword && !visible}
          keyboardType={keyboardType}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
          autoCorrect={false}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Text style={styles.toggle}>{visible ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { ...textStyles.bodyMd, fontWeight: '600', color: colors.textPrimary },
  field: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  input: { flex: 1, ...textStyles.bodyLg },
  toggle: { color: colors.primary, fontSize: 13 },
  error: { fontSize: 12, color: colors.error },
})