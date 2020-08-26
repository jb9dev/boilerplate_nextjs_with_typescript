import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be able to render Main componente', () => {
    const { container } = render(<Main />)
    const heading = screen.getByRole('heading', { name: /react avançado/i })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
