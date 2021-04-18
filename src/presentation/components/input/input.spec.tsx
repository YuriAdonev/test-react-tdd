import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

describe('Input Component', () => {
  afterEach(cleanup)

  test('Should begin with readOnly', () => {
    const { getByTestId } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name="field"/>
      </Context.Provider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
