import '@testing-library/jest-dom';
import React from "react"
import { render, screen } from "../../test-utils"
import userEvent from '@testing-library/user-event'
import RangeEditor from "./range-editor"
import { expect, it, vi } from "vitest"

it('can enter negative value to a numeric input', async () => {
    const mockOnChangeFn = vi.fn()
    const user = userEvent.setup()

    render(
        <RangeEditor
            value={0}
            onChange={mockOnChangeFn}
        />
    )

    const numberInput = screen.getByRole('spinbutton')
    expect(numberInput).toBeInTheDocument()

    await user.clear(numberInput)
    await user.type(numberInput, '-5')
    await user.tab()

    expect(mockOnChangeFn).toHaveBeenCalledWith(-5)
})
