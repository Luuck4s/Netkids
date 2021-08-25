class RoleModel {

  static get USER_ID(){
    return 2;
  }

  static get ADMIN_ID(){
    return 1;
  }

  static get USER_NAME(){
    return "User";
  }

  static get ADMIN_NAME(){
    return "Admin";
  }
}

module.exports = RoleModel;