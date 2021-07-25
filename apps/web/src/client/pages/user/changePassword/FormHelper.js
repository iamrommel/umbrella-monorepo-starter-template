import { Utils } from 'pcmli.umbrella.uni-core'
import { get } from 'lodash'

export class FormHelper {
  constructor({ props, state, setState, routesDef } = {}) {
    this.props = props
    this.state = state
    this.setState = setState
    this.routesDef = routesDef
    this.fetch = Utils.fetch
  }

  handleSubmit = async ({ newPassword, confirmPassword }) => {
    const { editPassword, history } = this.props

    try {
      Utils.requiredCheck(newPassword, 'New password')
      Utils.requiredCheck(confirmPassword, 'Confirm password')

      if (confirmPassword !== newPassword) throw new Error(`Password does not match`)

      //make to start the loading state initially
      this.setState({ isLoading: true })

      const responseJson = await this.fetch('/auth/basic/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: editPassword?._id, newPassword }),
      })

      const { error } = responseJson || {}

      if (error) {
        throw error
      } else {
        this.setState({ isLoading: false })
        //this.toastr.success('Successful! Please login using your new password.')
        history.push(this.routesDef.LoginPage.altPath)
      }
    } catch (error) {
      this.setState({ errorMessage: get(error, 'message', error.toString()) })
      this.setState({ isLoading: false })
    }
  }
}
