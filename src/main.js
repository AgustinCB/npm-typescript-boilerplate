'use strict'

const main = () => console.log('Hello World')

if (require.main === module) {
  main()
}
