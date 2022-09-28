
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trades').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('trades').insert([
        {id:1, user:'testUser', stock:'MES', method:'S&R', quantity:1, profitLoss:1},
        {id:2, user:'testUser', stock:'MES', method:'S&R', quantity:1, profitLoss:2}
      ]);
    });
};
