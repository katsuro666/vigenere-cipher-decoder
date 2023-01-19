class VigenereCipheringMachine {
  constructor(arg) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕËЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ1234567890+-'
    if (arg === false) {
      this.mode = 'reverse'
    } else {
      this.mode = 'direct'
    }
  }
  
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }    
    let result = ''
    let symbols = 0
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i].toUpperCase())) {
        let messageEnc = this.alphabet.indexOf(message[i].toUpperCase())
        let keyFit = (i >= key.length) ? key[(i - symbols) % key.length]
                                       : key[i - symbols]
        let keyEnc = this.alphabet.indexOf(keyFit.toUpperCase())
        let encryptMessage = this.alphabet[(this.alphabet.length + (messageEnc + keyEnc)) % this.alphabet.length]
        result = `${result}${encryptMessage}`
      } else {
        symbols++
        result = `${result}${message[i]}`
      }
    }

    if (this.mode === 'reverse') {
      return result.split('').reverse().join('')
    } return result
    
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }    
    let result = ''
    let symbols = 0
    
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let messageDec = this.alphabet.indexOf(message[i])
        let keyFit = (i >= key.length)  ? key[(i - symbols) % key.length]
                                        : key[i - symbols]
        let keyDec = this.alphabet.indexOf(keyFit.toUpperCase())
        let decryptMessage = this.alphabet[(this.alphabet.length + (messageDec - keyDec)) % this.alphabet.length]
        result = `${result}${decryptMessage}`
      } else {
        symbols++
        result = `${result}${message[i]}`
      }
    }

    if (this.mode === 'reverse') {
      return result.split('').reverse().join('')
    } return result
  }
}