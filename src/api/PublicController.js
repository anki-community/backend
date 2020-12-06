import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() {}

  async getCaptcha(ctx) {
    const newCaptca = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
    })

    ctx.body = {
      code: 200,
      data: newCaptca.data,
    }
  }
}

export default new PublicController()
