exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estado').del()
    .then(function () {
      // Inserts seed entries
      return knex('estado').insert([
        {codEstado: 'A', nomEstado: 'Nuevo', prioridadEstado: 8000, iconoEstado: 'EstadoA.png', esDisponible: true},
        {codEstado: 'B', nomEstado: 'Asignado', prioridadEstado: 7000, iconoEstado: 'EstadoB.png', esDisponible: true},
        {codEstado: 'B2', nomEstado: 'Reasignado', prioridadEstado: 7000, iconoEstado: 'EstadoB.png', esDisponible: true},
        {codEstado: 'X', nomEstado: 'Reabierto', prioridadEstado: 9000, iconoEstado: 'EstadoX.png', esDisponible: true},
        {codEstado: 'Y', nomEstado: 'Terminado', prioridadEstado: 2000, iconoEstado: 'EstadoY.png', esDisponible: true},
        {codEstado: 'Z', nomEstado: 'Cerrado', prioridadEstado: 1000, iconoEstado: 'EstadoZ.png', esDisponible: true},
      ]);
    });
};
