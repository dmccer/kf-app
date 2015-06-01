angular.module("gulu").run(["$templateCache",function(t){t.put("404/404.htm",'<section class="error-msg"> <div class="error-container"> <h2 class="error-status">错误 <span class="error-code">404</span> <small><strong>Opps!</strong> 您访问的页面不存在！</small></h2> <div class="text-center"> <a ng-href="/crm" role="button" class="btn btn-ion btn-primary"><i class="icon ion-home"></i>回到首页</a><a ng-href="/crm/help/index.html" role="button" class="btn btn-ion btn-danger"><i class="icon ion-help-buoy"></i>帮助文档</a> </div> </div> </section>'),t.put("client-service/dashboard.htm",'<nav class="navbar navbar-default"> <div class="container-fluid"> <div class="navbar-header"> <a class="navbar-brand" href="#!/indents">咕噜客服系统</a> </div> <ul class="nav navbar-nav"> <li ng-class="{ active: $state.includes(\'client_service.list\') }"><a href="#!/indents">待办</a></li> <li ng-class="{ active: $state.includes(\'client_service.indent\') }"><a href="#!/indents/0">新建预约单</a></li> <li ng-class="{ active: $state.includes(\'client_service.approval\') }"><a href="#!/indents/approval">待审批订单</a></li> </ul> </div> </nav> <div ui-view></div>'),t.put("indent/cancel_order.htm",'<div class="modal-header"> <button type="button" class="close" ng-click="cancel()"><span>&times;</span></button> <h4 class="modal-title">取消订单</h4> </div> <div class="modal-body"> <ul class="bg-warning"> <li>检测时间: <b>{{test_time}}</b></li> <li>预约地点: <b>{{address}}</b></li> <li>检测车型: <b>{{car_description}}</b></li> </ul> <form class="form" name="cancel_order_form" novalidate ng-submit="cancel_order()"> <div class="form-group" ng-class="{ \'has-error\': cancel_order_form.reason.$invalid && !cancel_order_form.reason.$pristine }"> <label>原因</label> <textarea name="reason" ng-model="reason" required class="form-control" placeholder="请输入取消原因" rows="4"></textarea> <p ng-show="cancel_order_form.reason.$invalid && !cancel_order_form.reason.$pristine" class="help-block">请输入取消原因</p> </div> <button type="submit" ng-disabled="cancel_order_form.$invalid" class="btn btn-default btn-info btn-block">确认</button> </form> </div> <div class="modal-footer"> <button class="btn btn-default" type="button" ng-click="cancel()">关闭</button> </div>'),t.put("indent/dispatch_tester.htm",'<div class="modal-header"> <button type="button" class="close" ng-click="cancel()"><span>&times;</span></button> <h4 class="modal-title">分配检测师</h4> </div> <div class="modal-body"> <ul class="bg-warning"> <li>检测时间: <b>{{test_time}}</b></li> <li>预约地点: <b>{{address}}</b></li> <li>检测车型: <b>{{car_description}}</b></li> </ul> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th>姓名</th> <th>从业经验</th> <th>已检车辆</th> <th>擅长车型</th> <th>电话</th> <th>操作</th> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td>{{item.name}}</td> <td>{{item.experience}}</td> <td>{{item.tested_car_count}}</td> <td>{{item.good_at}}</td> <td>{{item.mobile}}</td> <td><button class="btn btn-warning" ng-disabled="dispatch_status" ng-click="dispatch(item)">分配</button></td> </tr> </tbody> </table> </div> <div class="clearfix"> <div class="pagination-container pull-right"> <pagination boundary-links="true" total-items="total_count" ng-model="page" max-size="5" rotate="false" items-per-page="15" ng-change="query(page)" class="field" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="首页" last-text="尾页"></pagination> </div> </div> </div> <div class="modal-footer"> <button class="btn btn-warning" type="button" ng-click="cancel()">取消</button> </div>'),t.put("indent/edit.htm",'<div class="container edit-order" style="margin-bottom:2em"> <form class="form-horizontal" name="edit_form" novalidate ng-submit="submit()"> <h4 class="page-header">订单基本信息</h4> <div class="dl-inline bg-warning"> <span>订单ID: <b>{{no}}</b></span><span>预约来源: <b>{{from}}</b></span> </div> <div class="row"> <div class="col-md-6"> <div class="form-group" ng-class="{ \'has-error\': edit_form.type.$invalid && !edit_form.type.$pristine || type.value == 0 }"> <label class="col-sm-3 control-label">* 预约服务: </label> <div class="col-sm-9"> <select name="type" ng-model="type" ng-options="type_item.text for type_item in type_list" required class="form-control"></select> <p ng-show="edit_form.type.$invalid && !edit_form.type.$pristine || type.value == 0" class="help-block">请选择预约服务</p> </div> </div> <div class="form-group" ng-class="{ \'has-error\': edit_form.address.$invalid && !edit_form.address.$pristine}"> <label class="col-sm-3 control-label">* 检测地址: </label> <div class="col-sm-9"> <input name="address" ng-model="address" required type="text" class="form-control" placeholder="检测地址"> <p ng-show="edit_form.address.$invalid && !edit_form.address.$pristine" class="help-block">请输入检测地址</p> </div> </div> </div> <div class="col-md-6"> <div class="form-group" ng-class="{ \'has-error\': edit_form.test_time.$invalid && !edit_form.test_time.$pristine }"> <label class="col-sm-3 control-label">* 检测时间: </label> <div class="col-sm-9"> <div class="input-group" ng-click="open_datepicker($event)"> <input type="text" class="form-control" name="test_time_before" readonly="readonly" ng-model="test_time_before" min-date="from_time" datepicker-popup="yyyy-MM-dd" is-open="test_time_open" close-text="关闭" current-text="今天" clear-text="清除" required>\n<span class="input-group-btn"> <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-calendar"></i></button> </span> </div> <timepicker name="test_time_after" ng-model="test_time_after" hour-step="1" minute-step="15" show-meridian="ismeridian"></timepicker> <input name="test_time" ng-model="test_time" required type="hidden" class="form-control"> <p ng-show="edit_form.test_time.$invalid && !edit_form.test_time.$pristine" class="help-block">请选择检测时间</p> </div> </div> </div> </div> <h4 class="page-header">订单用户信息</h4> <div class="row"> <div class="col-md-6"> <div class="form-group" ng-class="{ \'has-error\': edit_form.reserver.$invalid && !edit_form.reserver.$pristine}"> <label class="col-sm-3 control-label">* 预约用户: </label> <div class="col-sm-9"> <input name="reserver" ng-model="reserver" required type="text" class="form-control" placeholder="预约用户"> <p ng-show="edit_form.reserver.$invalid && !edit_form.reserver.$pristine" class="help-block">请输入预约人姓名</p> </div> </div> </div> <div class="col-md-6"> <div class="form-group" ng-class="{ \'has-error\': edit_form.mobile.$invalid && !edit_form.mobile.$pristine}"> <label class="col-sm-3 control-label">* 预约手机: </label> <div class="col-sm-9"> <input name="mobile" ng-model="mobile" required ng-pattern="/^1[0-9]{10}$/" type="tel" class="form-control" placeholder="预约电话"> <p ng-show="edit_form.mobile.$invalid && !edit_form.mobile.$pristine" class="help-block">请输入预约手机号</p> </div> </div> </div> </div> <h4 class="page-header">订单车辆信息</h4> <div class="row"> <div class="col-md-6"> <div class="form-group"> <label class="col-sm-3 control-label">待检车源: </label> <div class="col-sm-9"> <select name="channel" ng-model="channel" ng-options="channel_item.text for channel_item in channel_list" class="form-control"></select> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group"> <label class="col-sm-3 control-label">备注: </label> <div class="col-sm-9"> <textarea name="memo" ng-model="memo" placeholder="车辆数量、品牌等其他信息" class="form-control" rows="4"></textarea> </div> </div> </div> </div> <div class="btn-toolbar" style="margin-top:2em;text-align:center"> <button type="submit" ng-disabled="edit_form.$invalid" class="btn btn-info">生效订单</button>\n<button type="button" class="btn btn-warning" ng-click="cancel()">取消并通知用户</button>\n<button type="button" class="btn btn-default" ng-click="cancel_confirm()">联系不上用户</button> </div> </form> </div>'),t.put("indent/list.htm",'<div class="container"> <form class="form-horizontal" style="margin-bottom:2em" name="search_form" novalidate ng-submit="search()"> <div class="row"> <div class="col-md-6"> <div class="form-group"> <label class="col-sm-3 control-label">订单状态: </label> <div class="col-sm-9"> <select name="status" ng-model="status" ng-options="status_item.text for status_item in status_list" class="form-control"></select> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">检测师: </label> <div class="col-sm-9"> <select name="tester" ng-model="tester" ng-options="tester_item.text for tester_item in tester_list" class="form-control"></select> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">角色: </label> <div class="col-sm-9"> <select name="role" ng-model="role" ng-options="role_item.text for role_item in role_list" class="form-control"></select> </div> </div> </div> <div class="col-md-6"> <div class="form-group"> <label class="col-sm-3 control-label">订单城市: </label> <div class="col-sm-9"> <select name="city" ng-model="city" ng-options="city_item.text for city_item in city_list" class="form-control"></select> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">预约电话: </label> <div class="col-sm-9"> <input name="mobile" ng-model="mobile" type="tel" class="form-control" placeholder="预约电话"> </div> </div> </div> </div> <button type="submit" class="btn btn-info btn-block">查询</button> </form> <div class="panel panel-default"> <div class="panel-heading">待办列表</div> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th>订单号</th> <th>预检信息</th>  <th>订单状态</th> <th>检测师</th> <th>操作</th> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td>{{item.no}}</td> <td> <ul> <li>用户: <b>{{item.reserver}}</b></li> <li>电话: <b>{{item.mobile | mobile}}</b></li> <li>时间: <b>{{item.test_time}}</b></li> <li>地址: <b>{{item.address}}</b></li> <li>车型: <b>{{item.car_description}}</b></li> <li>来源: <b>{{item.from}}</b></li> </ul> </td>  <td>{{item.status_text}}</td> <td>{{item.tester}}</td> <td> <div class="btn-group-vertical"> <a ng-if="item.status === 1" class="btn btn-warning" ng-click="confirm_order(item)">确认订单</a><a ng-if="item.status === 1001 && !item.confirm_by_other" href="#!/indents/{{item.id}}" class="btn btn-warning">生效订单</a>\n<button ng-if="item.status === 2 && !item.confirm_by_other" ng-click="dispatch_tester(item)" type="button" class="btn btn-success">分配检测师</button>\n<button ng-if="item.status === 3 && !item.confirm_by_other" ng-click="approval(item)" type="button" class="btn btn-info">审核取消</button>\n<button ng-if="item.status >= 1 && item.status < 7 && item.status !== 3" ng-click="cancel_order(item)" type="button" class="btn btn-default">取消订单</button>\n<a ng-if="item.status === 7" href="javascript:void(0)" popover="{{item.reason}}" popover-trigger="mouseenter" class="btn btn-warning">查看原因</a> </div> </td> </tr> </tbody> </table> </div> <div class="panel-footer clearfix"> <div class="pagination-container pull-right"> <div class="field">共 <b>{{total_count}}</b> 条记录</div> <pagination boundary-links="true" total-items="total_count" ng-model="page" max-size="5" rotate="false" items-per-page="size" ng-change="page_change(page)" class="field" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="首页" last-text="尾页"></pagination> <div class="field">每页 <select ng-model="size_item" ng-change="size_change(size_item.value)" ng-options="item.text for item in sizes"></select> 条</div> <div class="field">共 <b>{{page_count}}</b> 页</div> </div> </div> </div> </div>'),t.put("indent/list_approval.htm",'<div class="container"> <div class="panel panel-default"> <div class="panel-heading">待审批列表</div> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th>订单号</th> <th>预检信息</th>  <th>订单状态</th> <th>检测师</th> <th>操作</th> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td>{{item.no}}</td> <td> <ul> <li>预检人: <b>{{item.reserver}}</b></li> <li>电话: <b>{{item.mobile | mobile}}</b></li> <li>时间: <b>{{item.test_time}}</b></li> <li>地址: <b>{{item.address}}</b></li> <li>车型: <b>{{item.car_description}}</b></li> <li>来源: <b>{{item.from}}</b></li> </ul> </td>  <td>{{item.status_text}}</td> <td>{{item.tester}}</td> <td> <div class="btn-group-vertical"> <button ng-if="item.status === 3" ng-click="approval(item)" type="button" class="btn btn-info">审核取消</button> </div> </td> </tr> </tbody> </table> </div> <div class="panel-footer clearfix"> <div class="pagination-container pull-right"> <div class="field">共 <b>{{total_count}}</b> 条记录</div> <pagination boundary-links="true" total-items="total_count" ng-model="page" max-size="5" rotate="false" items-per-page="size" ng-change="page_change(page)" class="field" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="首页" last-text="尾页"></pagination> <div class="field">每页 <select ng-model="size_item" ng-change="size_change(size_item.value)" ng-options="item.text for item in sizes"></select> 条</div> <div class="field">共 <b>{{page_count}}</b> 页</div> </div> </div> </div> </div>'),t.put("login/login.htm",'<div class="container"> <h2 style="text-align:center;margin-bottom:2em">登录 - 咕噜客服系统</h2> <form class="form" name="login_form" novalidate ng-submit="login()"> <div class="form-group" ng-class="{ \'has-error\': login_form.job_no.$invalid && !login_form.job_no.$pristine }"> <label>账号</label> <input type="tel" name="job_no" ng-model="job_no" required class="form-control" placeholder="请输入咕噜工号"> <p ng-show="login_form.job_no.$invalid && !login_form.job_no.$pristine" class="help-block">请输入咕噜工号</p> </div> <div class="form-group" ng-class="{ \'has-error\': login_form.password.$invalid && !login_form.password.$pristine }"> <label>密码</label> <input type="password" name="password" ng-model="password" required class="form-control" placeholder="请输入密码"> <p ng-show="login_form.password.$invalid && !login_form.password.$pristine" class="help-block">请输入密码</p> </div> <button type="submit" ng-disabled="login_form.$invalid" class="btn btn-default btn-info btn-block">登录</button> </form> </div>')}]);