const validator = (input) => {
return (typeof input === 'object' && typeof input.title === 'string' && typeof input.description === 'string' )
}