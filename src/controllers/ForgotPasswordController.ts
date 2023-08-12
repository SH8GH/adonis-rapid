import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ForgotPasswordProps } from 'adonis-rapid'

export default class ForgotPasswordController {
  constructor(public app: ApplicationContract) {}

  public async show(context: HttpContextContract, data: ForgotPasswordProps) {
    if (this.app.container.hasBinding('EidelLev/Inertia')) {
      return context.inertia.render('Auth/ForgotPassword', data)
    }

    return context.view.render('pages/auth/forgot-password', data)
  }

  public async update({}: HttpContextContract) {}
}