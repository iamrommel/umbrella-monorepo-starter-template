import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

toastr.options = {
  closeButton: true,
  debug: false,
  progressBar: true,
  preventDuplicates: false,
  positionClass: 'toast-top-right',
  onclick: null,
  showDuration: '4000',
  hideDuration: '1000',
  timeOut: '7000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
}
