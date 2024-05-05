import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {

  return (
    <Link to='/status' className='tweet'>
      <img src="https://github.com/gt3oliveira.png" alt="Gustavo Tavares" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gustavo Tavares</strong>
          <span>@gustavo021</span>
        </div>

        <p>
          {content}
          {/* Acabei de migrar um projeto GIGANTE de create-react-app para Vite e os resultados foram: <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
          ✅ npm build: De 120s para 22s <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 */}
        </p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          
          <button type='button'>
            <ArrowsClockwise />
            20
          </button>
          
          <button type='button'>
            <Heart />
            20
          </button>                    
        </div>
      </div>
    </Link>
  )
}
