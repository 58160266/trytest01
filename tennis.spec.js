function TennisApp() {
  let playerAScore = 0
  let playerBScore = 0
  const scoreString = ['Love', 'Fifteen', 'Thirthy', 'Forthy']
  this.reset = () => {
    playerAScore = 0
    playerBScore = 0
  }

  this.echo = () => {
    if (playerAScore > 3) {
      return 'Player A wins game'
    }

    return `${scoreString[playerAScore]} - Love`
  }

  this.playerAGetScore = () => {
    playerAScore++
  }
}

describe('Tennis App', () => {
  describe('When player A gets score', () => {
    let app

    function repeatPlayerAGetScore(number){
      for(let i = 0 ;i<number;i++){
        app.playerAGetScore()
      }
    }

    beforeEach(() => {
      app = new TennisApp()
      app.reset()
    })

    it('should echo "Love - Love" when game starts', () => {
      let result = app.echo()
      expect(result).toBe('Love - Love')
    })

    it.only('should echo "Fifteen - Love" when score is 15-0', () => {
      repeatPlayerAGetScore(1)
      let result = app.echo()

      expect(result).toBe('Fifteen - Love')
    })

    it('should echo "Thirthy - Love" when score is 30-0', () => {
      app.playerAGetScore()
      app.playerAGetScore()
      let result = app.echo()

      expect(result).toBe('Thirthy - Love')
    })

    it('should echo "Forthy - Love" when score is 40-0', () => {
      app.playerAGetScore()
      app.playerAGetScore()
      app.playerAGetScore()
      let result = app.echo()

      expect(result).toBe('Forthy - Love')
    })

    it('should echo "Player A wins game" when player A gets next score at 40-0', () => {
      app.playerAGetScore()
      app.playerAGetScore()
      app.playerAGetScore()
      app.playerAGetScore()
      let result = app.echo()

      expect(result).toBe('Player A wins game')
    })
  })
})
