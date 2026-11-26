import { useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { colors, textStyles } from '../theme'

const emailRegex = /^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$/

export default function Login({ onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [status, setStatus] = useState(null)

  const handleLogin = () => {
    const cleanEmail = email.trim()

    const newEmailError = !cleanEmail
      ? 'Ingresa tu correo electrónico'
      : !emailRegex.test(cleanEmail)
        ? 'Correo electrónico inválido'
        : null
    const newPasswordError = !password ? 'Ingresa tu contraseña' : null

    setEmailError(newEmailError)
    setPasswordError(newPasswordError)

    if (newEmailError || newPasswordError) {
      setStatus({
        message: 'Revisa los campos marcados antes de continuar',
        isError: true,
      })
    } else {
      setStatus({ message: 'Inicio de sesión exitoso', isError: false })
      console.log('Login:', { email: cleanEmail, password })
    }
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={textStyles.headlineLg}>Bienvenido de nuevo</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar tu experiencia</Text>

      <View style={styles.card}>
        <Input
          label="Correo electrónico"
          placeholder="alex@ejemplo.com"
          type="email"
          value={email}
          error={emailError}
          onChange={(value) => {
            setEmail(value)
            setEmailError(null)
          }}
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          error={passwordError}
          labelRight={<Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>}
          onChange={(value) => {
            setPassword(value)
            setPasswordError(null)
          }}
        />
        <Button text="Iniciar sesión" onPress={handleLogin} />
        {status ? (
          <Text
            style={[
              styles.status,
              { color: status.isError ? colors.error : colors.success },
            ]}
          >
            {status.message}
          </Text>
        ) : null}
      </View>

      <Text style={styles.footer}>
        ¿No tienes una cuenta?{' '}
        <Text style={styles.link} onPress={onRegister}>
          Regístrate
        </Text>
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  container: { flexGrow: 1, justifyContent: 'center', padding: 24, gap: 8 },
  subtitle: { ...textStyles.bodyMd, marginBottom: 16 },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 20,
    gap: 16,
  },
  forgot: { ...textStyles.bodyMd, color: colors.primary },
  status: { ...textStyles.bodyMd, fontWeight: '600', textAlign: 'center' },
  footer: { ...textStyles.bodyMd, textAlign: 'center', marginTop: 16 },
  link: { color: colors.primary, fontWeight: '600' },
})