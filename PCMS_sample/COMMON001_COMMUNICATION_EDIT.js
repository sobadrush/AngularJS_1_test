'use strict';
eSoafApp.controller('COMMON001_COMMUNICATION_EDITController', 
	    function($rootScope,$scope, $controller, sysInfoService,socketService, ngDialog, projInfoService) {
	        $controller('BaseController', {$scope: $scope});
	        $scope.controllerName = "COMMON001_COMMUNICATION_EDITController";

	        $scope.init = function(){
	        	$scope.communicationList=[];
	            $scope.inputVO = {
			            BRACHNO:$rootScope.BRACHNO,//存數據--可以為空字符串
			            FLOW_MAIN_SEQ:$rootScope.FLOW_MAIN_SEQ,
			            FLOW_BRANCH_SEQ:$rootScope.FLOW_BRANCH_SEQ,//存數據--不能為空;推播
			        	BRANCH_ID:$rootScope.BRANCH_ID==undefined?sysInfoService.getAoBranch():$rootScope.BRANCH_ID,//存數據--sysInfoService.getAoBranch(); 
			        	COM_CONTENT:'',//存數據--輸入的訊息
			        	BUSSINESS_ID:$rootScope.CASE_NO.substring(11,14),//推播
			        	TRADE_ID:$rootScope.TRADE_ID,
			        	CASE_NO:$rootScope.CASE_NO,//推播
			        	FUNCTION_CODE:$rootScope.FUNCTION_CODE,//郵件-功能代號
			        	MSG_SEQ_ARRAY : angular.toJson( $rootScope.msg_seq_array ) , // 存放溝通訊息SEQ的Array
	            };
	        }
	        $scope.init();
	        
	       $scope.inquireInit = function(){
	        	$scope.sendRecv("COMMON001", "inquireCommunicationList", "json",  $scope.inputVO,
	   	                  function(tota, isError) {
	   	                      if (!isError) {
	   	                    	  if (tota[0].body=="FAIL") {
	   	                    		  $scope.showMsg("無溝通補件訊息！");
	   	                    	  }else {
	   	                    		  $scope.communicationList = tota[0].body;
	   	                    	  }
	   	                    	  return;
	   	                      }
	   	                  });
	        } 
	        $scope.inquireInit();
	        
	        $scope.save = function(){
	        	if ($scope.inputVO.COM_CONTENT.length == 0 || $scope.inputVO.COM_CONTENT.trim() == "")
	        	{
	        		$scope.showMsg("溝通補件訊息不能爲空！");
	        	}
	        	else
	        	{
	        		var content = {"flowSeq":$scope.inputVO.FLOW_BRANCH_SEQ,"busId":$scope.inputVO.BUSSINESS_ID,"function_code":$scope.inputVO.FUNCTION_CODE,"case_no":$scope.inputVO.CASE_NO};
	        		$scope.sendRecv("COMMON001", "saveCommunicationContent", "json",  $scope.inputVO,
		   	                  function(tota, isError) {	        			
		        				  //console.log("tota[0].body.msg",tota[0].body.msg)
		        				  //console.log("tota[0].body>>>",tota[0].body)
		   	                      if (!isError) {
		   	                    	  if (tota[0].body.msg=="溝通補件成功") {
		   	                    		  
		   	                    		// socketService.sendWsToUser(tota[0].body.requsertTeller, "2", angular.toJson(content));
			   	                    	$scope.showMsg(tota[0].body.msg);
			   	                    	$scope.closeThisDialog("successful");
			   	                    	
			   	                    	$rootScope.msg_seq_array.push( tota[0].body.msgSEQ ); // 存放溝通訊息SEQ的Array
			   	                    	
			   	                    	$('#statusMsg').css("background-color", "")
			            				               .css({ 'background-color' : 'GREEN' });
									}else {
										$scope.showMsg(tota[0].body.msg);
									}
		   	                    	return;
		   	                      }
		   	                  });
	        	}
	        }
    	}
);
