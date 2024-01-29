export type TestResults = {
  status?: 'pass' | 'fail'
  duration?: number
  errors?: string[]
  testPath?: string[]
}
