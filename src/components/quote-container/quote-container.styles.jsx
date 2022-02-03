import styled, { css } from 'styled-components'

const buttonStyles = css`
  cursor: pointer;
  font-size: 1.2rem;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #333;
  outline: none;
  padding: 0.5rem 1.8rem 0.5rem 1.8rem;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }
`

export const QuoteContainerDiv = styled.div`
  width: auto;
  max-width: 900px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
`

export const QuoteTextContainer = styled.div`
  font-size: 2.75rem;
`

export const QuoteAuthorContainer = styled.div`
  margin-top: 15px;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
`

export const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`

export const TwitterButton = styled.button`
  ${buttonStyles}

  &:hover {
    color: #38a1f3;
  }
`

export const NextQuoteButton = styled.button`
  ${buttonStyles}
`
