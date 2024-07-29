function skillsMember() {
      return {
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node'],
    addSkill(skill) {
      this.skills.push(skill);
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill);
    },
  };
}