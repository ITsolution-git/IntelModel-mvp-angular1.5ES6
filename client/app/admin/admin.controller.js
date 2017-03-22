'use strict';
import $ from 'jquery';
import { NgTableParams } from 'ng-table';

export default class AdminController {
  /*@ngInject*/
  constructor(User, Company, $uibModal) {
    console.log($(window));
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.$uibModal = $uibModal;
    var _this = this;
    Company.query({}, function(data) {
      _this.companies = data;
      console.log(_this.companies);
      }, function(err) {
    });
  }

  expand(e){
    if($(e.currentTarget).parent().hasClass('collapsed')){
      $(e.currentTarget).parent().removeClass('collapsed');
      $(e.currentTarget).parent().addClass('expanded');
      $(e.currentTarget).html('<i class="fa fa-minus" aria-hidden="true"></i>');
    }
    else{
      $(e.currentTarget).parent().removeClass('expanded');
      $(e.currentTarget).parent().addClass('collapsed');
      $(e.currentTarget).html('<i class="fa fa-plus" aria-hidden="true"></i>');

    }
  }
  activateUser(user) {
    user.authorized = true;
    user.$update();
  }

  deactivateUser(user) {
    user.authorized = false;
    user.$update();
  }

  activateCompany(company) {
    company.active = true;
    company.$update();
  }

  deactivateCompany(company) {
    company.active = false;
    company.$update();
  }
  
  deleteUser(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  deleteCompany(company) {
    company.$remove();
    this.companies.splice(this.companies.indexOf(company), 1);
  }

  openUserModal(company) {
   
    var modalInstance = this.$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'newUser.html',
      controller: 'NewUserModalController',
      controllerAs: 'newuserModal',
      resolve: {
        companyId: function(){
          return company._id;
        }
      }
    });
    var _this = this;
    modalInstance.result.then(function (newUser) {
      _this.users.push(newUser);
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
}
