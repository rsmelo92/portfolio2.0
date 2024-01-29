import * as jest from 'jest-lite';

export type TestResults = {
  status?: 'pass' | 'fail'
  duration?: number
  errors?: string[]
  testPath?: string[]
}

export type JestLite = {
  it: (declaration: string, cb: () => void) => void
  describe: (declaration: string, cb: () => void) => void
} & typeof jest
