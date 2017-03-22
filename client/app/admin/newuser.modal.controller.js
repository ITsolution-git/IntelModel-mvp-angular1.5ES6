'use strict';

export default class NewUserModalController {
  /*@ngInject*/
  constructor($uibModalInstance, companyId, $uibModal, User) {
    this.$uibModalInstance = $uibModalInstance;
    this.companyId = companyId;
    this.User = User;
  }
  userSubmitted = false
  errors = {}
  onSave(userform){
    this.userSubmitted = true;

    if (userform.$valid) {
      return this.User.save({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone,
        companyId: this.companyId,
        primary: false
      }).$promise
      .then((data) => {
        this.$uibModalInstance.close(this.User.getOther({}, data.user));
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        if (err && typeof err.errors !== 'undefined') {
          angular.forEach(err.errors, (error, field) => {
            userform[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        }

      });
    }
  }

  onCancel(){
    this.$uibModalInstance.dismiss('cancel');
  }
}
