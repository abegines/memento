exports.up = function(knex) {
  return knex.schema
  .createTable('usuario', function (table) {
     table.increments('id').primary();
     table.string('email', 255).notNullable();
     table.string('nombre', 255).notNullable();
     table.enu('nivelUsuario', ['I','U','C','T','A'] ).notNullable();
     table.boolean('esActivo').notNullable();
  })
  .createTable('estado', function (table) {
     table.string('codEstado',2).notNullable();
     table.string('nomEstado',30).notNullable();
     table.integer('prioridadEstado').notNullable();
     table.string('iconoEstado', 30).notNullable();
     table.boolean('esDisponible').notNullable();
     table.primary('codEstado');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTable("usuario")
  .dropTable("estado");
};
