const names = [
    {student: 'Max', present: true},
    {student: 'Kevin', present: true},
    {student: 'Lester', present: true},
    {student: 'Sean', present: false}
];

module.exports = {
    getAll: function() {
        return names;
    }
};