import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'
import { colors, textStyles } from '../theme'

export default function Welcome({ onLogin, onRegister }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Z</Text>
      </View>
      <Text style={styles.title}>Bienvenido a IZOK</Text>
      <Text style={styles.subtitle}>
        Descubre piezas seleccionadas y sigue tus pedidos en tiempo real.
      </Text>
      <Button text="Iniciar sesión" onPress={onLogin} />
      <Button text="Crear cuenta" variant="secondary" onPress={onRegister} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 12,
    backgroundColor: colors.background,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: { color: colors.surface, fontSize: 28, fontWeight: '600' },
  title: { ...textStyles.headlineLg, fontSize: 32 },
  subtitle: { ...textStyles.bodyMd, marginBottom: 24 },
})