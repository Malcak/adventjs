function contarOvejas(ovejas) {
  const colorFilter = 'rojo'
  const charFilters = ['n', 'a'] 
  return ovejas.filter(oveja => { 
    return (oveja.color === colorFilter 
      && charFilters.every(char => oveja.name.toLowerCase().includes(char)))
  })
}