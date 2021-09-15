let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'member'
          : ((user.level >= 20) && (user.level <= 30)) ? 'MEMBER+'
          : ((user.level >= 30) && (user.level <= 40)) ? 'VIP'
          : ((user.level >= 40) && (user.level <= 50)) ? 'ENJOYER'
          : ((user.level >= 50) && (user.level <= 60)) ? 'MASTER'
          : ((user.level >= 60) && (user.level <= 70)) ? 'MASTER c'
          : ((user.level >= 70) && (user.level <= 80)) ? 'teman yoga'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
