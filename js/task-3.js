const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(...hours) {
    const totalHours = hours.reduce((sum, hour) => sum + hour, 0);
    this.playTime += totalHours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo());

profile.changeUsername('Marco');
console.log(profile.getInfo());

profile.updatePlayTime(...[10, 5, 5]);
console.log(profile.getInfo());
