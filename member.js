function skillsMember() {
    return {
        name: 'John Doe',
        age: 25,
        skills: ['JavaScript', 'ReactJS', 'NodeJS'],
        displaySkills: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
}