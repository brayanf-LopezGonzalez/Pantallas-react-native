import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../theme'

export default function Checkbox({ checked, onChange }) {
  return (
    <TouchableOpacity
      onPress={() => onChange(!checked)}
      style={[
        styles.box,
        {
          borderColor: checked ? colors.primary : colors.border,
          backgroundColor: checked ? colors.primary : colors.surface,
        },
      ]}
    >
      {checked ? <Text style={styles.check}>✓</Text> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: { color: colors.surface, fontSize: 13, fontWeight: '700' },
})