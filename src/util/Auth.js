/**
 * This file is responsable for any related thing to Authorize the users
 */

export function saveLogin(token) {
  localStorage.setItem('usrToken', token);

  //   Only for test
  //   console.log('================ FROM AUTH FILE =============\n' + localStorage.getItem('usrToken'));
}
