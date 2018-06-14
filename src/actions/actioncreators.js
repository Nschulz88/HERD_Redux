// signup for event 
export function signup(eventId) {
  return {
    type: 'SIGN_UP',
    eventId
  }
}

// un-signup for an event
export function unsign(eventId, user) {
 console.log('Dispatching the unsign action')
 return {
   type: 'UNSIGN',
   eventId,
   user
 }
}