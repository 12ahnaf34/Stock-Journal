
exports.up = async knex => {
  await knex.schema.createTable('trades', tbl => {
      tbl.text('id');
      tbl.text('user', 256).notNullable();
      tbl.text('stock', 256).notNullable();
      tbl.text('method', 256).notNullable();
      tbl.integer('quantity').notNullable();
      tbl.float('profitLoss');
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('trades');
};
