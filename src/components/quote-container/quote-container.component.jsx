import { useState } from 'react'

import {
  QuoteContainerDiv,
  QuoteTextContainer,
  QuoteAuthorContainer,
  ButtonContainer,
  TwitterButton,
  NextQuoteButton,
} from './quote-container.styles'
import quotes from './quote.data'

const QuoteContainer = () => {
  const [quoteIndex, setQuoteIndex] = useState(0)

  const handleNextQuoteGeneration = () => {
    if (quoteIndex === quotes.length - 1) {
      setQuoteIndex(0)
    } else {
      setQuoteIndex(prevQuote => prevQuote + 1)
    }
  }

  const handleTweetQuote = () => {
    const quoteText = quotes[quoteIndex].text
    const quoteAuthor = quotes[quoteIndex].author
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`
    window.open(twitterUrl, '_blank')
  }

  return (
    <QuoteContainerDiv>
      <QuoteTextContainer>
        <i className='fas fa-quote-left' style={{ fontSize: '4rem' }}></i>
        <span>{quotes[quoteIndex].text}</span>
      </QuoteTextContainer>
      <QuoteAuthorContainer>
        <span>{quotes[quoteIndex].author}</span>
      </QuoteAuthorContainer>
      <ButtonContainer>
        <TwitterButton title="Tweet This!" onClick={handleTweetQuote}>
          <i class="fab fa-twitter" style={{ fontSize: '1.5rem' }}></i>
        </TwitterButton>
        <NextQuoteButton onClick={handleNextQuoteGeneration}>New Quote</NextQuoteButton>
      </ButtonContainer>
    </QuoteContainerDiv>
  )
}

export default QuoteContainer
