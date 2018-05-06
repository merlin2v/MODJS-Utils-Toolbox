_MOD_PACK_MOD_TYPE_={
	setFunc(text,target){
		return {type:"set",text:text,owner:target};
	},
	insert(text,search,func){
		return {type:"insert","text":text,"find":search,owner:func};
	},
	inserta(text,search,func){
		return {type:"inserta","text":text,"find":search,owner:func};
	},
	replacer(text,search,func){
		return {type:"replacer",text:text,find:search,owner:func};
	},
	replace(text,search,func){
		return {type:"replace",text:text,find:search,owner:func};
	},
	wrap(text1,text2,search,func){
		return {type:"wrap",text1:text1,text2:text2,find:search,owner:func};
	}
}

function install(package){
	var pack=package,
		name=pack.name.toUpperCase()),
		funcs=p.funcs;
		var name,funcs,pack;
	var targets,start,end,mid;
	targets=pack.funcs.map(obj=>obj.owner);
	if(typeof installed === "undefined"){
		installed=[];
	}
	if(!installed[name]){
		installed[name]=pack;
	}else{
		throw new Error('Pack Already Installed');
	}
	start="/***||"+"START"+"-"+name+"||***/";
	end="/***||","END","-",name,"||***/";
	mid="/***||","MID","-",name,"||***/";
	var item;
	//i=0;
	for(var i = 0; i < funcs.length; i++){
		item=funcs[i];
		switch(item.type){
			case "insert":
				var addInLabelPart= start+"\n"+item.text+"\n"+end;
				var funcStr = eval(item.owner+".toString()");
					funcStr = funcStr.replace(item.find,addInLabelPart+item.find);
					eval(item.owner+" = "+funcStr);
					break;
			case "inserta":
				var addInLabelPart= start+"\n"+item.text+"\n"+end;
				var funcStr = eval(item.owner+".toString()");
					funcStr = funcStr.replace(item.find,item.find+addInLabelPart);
				eval(item.owner+" = "+funcStr);
				break;
			case "set":
				if(typeof item.owner=="undefined"){
					var funcStr = eval(item.owner+".toString()");
					var func = world.installed[name].funcs[world.installed[name].funcs.map(e=>e.owner).indexOf(item.owner)];
					func.oldFunc=funcStr;
				}
				eval(item.owner+" = "+item.text);
				break;
			case "replace":
				var addInLabelPart= start+"/*REPLACE-"+item.find+"*/\n"+item.text+"\n"+end;
				var funcStr = eval(item.owner+".toString()");
				var func = world.installed[name].funcs[world.installed[name].funcs.map(e=>e.owner).indexOf(item.owner)];
				func.oldFunc=funcStr;
				var funcStr = eval(item.owner+".toString()");
				funcStr = funcStr.replace(item.find,addInLabelPart);
				eval(item.owner+" = "+funcStr);
				break;
			case "replacer":
				var lines=item.find.split("\n"),
					newlines=[];
				for(var i = 0; i < lines.length;i++){
					newlines.push("//"+lines[i]);
				}
				var addInLabelPart= start+newlines.join("\n")+mid+"\n"+item.text+"\n"+end;
				var funcStr = eval(item.owner+".toString()");
					funcStr = funcStr.replace(item.find,addInLabelPart);
					eval(item.owner+" = "+funcStr);
					break;
			case "wrap":
				var addInLabelPart= start+"\n"+item.text1+"\n"+end+item.find+start+"\n"+item.text2+"\n"+end;
				var funcStr = eval(item.owner+".toString()");
					funcStr = funcStr.replace(item.find,addInLabelPart);
					eval(item.owner+" = "+funcStr);
					break;
		}
		//i+=1;
	}
}
function uninstall(package){
	var name,funcs,pack;
	pack=package;
	name= pack.name = pack.name.toUpperCase());
	funcs=pack.funcs;
	var targets,start,end,mid;
	targets=pack.funcs.map(obj=>obj.owner);
	if(typeof installed === "undefined"){
		installed=[];
	}
	if(!installed[name]){
		installed[name]=pack;
	}
	if(typeof installed[name]!="undefined"){
	}else{
		throw new Error('Pack Not Installed')
	}
	start=["/***||","START","-",name,"||***/"].join("");
	end=["/***||","END","-",name,"||***/"].join("");
	mid=["/***||","MID","-",name,"||***/"].join("");
	var item;
	for(var i = 0; i < funcs.length; i++){
		item=f[i];
		switch(item.type){
			case "set":
				var func = world.installed[name].funcs[world.installed[name].funcs.map(e=>e.owner).indexOf(item.owner)];
				eval(item.owner+" = "+((typeof func!="undefined")?func.oldFunc:undefined));
				break;
			case "replacer":
				removeInstalled = function(funcStr){
					var funcArr = funcStr.split(start);
					var newFuncArr = [];
					console.log('a');
					for(var i=0;i<funcArr.length;i++){//for each peice
						newFuncArr = newFuncArr.concat(funcArr[i].split(mid));
					}
					funcArr = newFuncArr;
					console.log(funcArr);
					newFuncArr = [];
					for(var i=0;i<funcArr.length;i++){
					   if(i%3 !== 0){
						   newFuncArr = newFuncArr.concat(funcArr[i].split(end));
					   }else{
						   newFuncArr = newFuncArr.concat(funcArr[i]);
					   }
					}
					funcArr = newFuncArr;
					console.log(funcArr);
					newFuncArr = [];
					for(var i=0;i<funcArr.length;i++){
						if((i+1)%3 !== 0){
							newFuncArr = newFuncArr.concat(funcArr[i]);
						}
					}
					funcArr = newFuncArr;
					console.log(funcArr);
					newFuncArr = [];
					for(var i=0;i<funcArr.length;i++){
						if(i%2 !== 0){
							var lines=funcArr[i].split("\n"),
							newlines=[];
							for(var j=0;j<lines.length;j++){
								newlines.push(lines[j].substr(2));
							}
							newFuncArr = newFuncArr.concat(newlines.join("\n"));
						}else{
							newFuncArr = newFuncArr.concat(funcArr[i]);
						}
					}
					return newFuncArr.join("");
				}
				var newfunc = removeInstalled(eval(item.owner+".toString()"));
				eval(item.owner+" = " + newfunc);
				break;
			default:
				removeInstalled = function(funcStr){
					var funcArr = funcStr.split(start);
					var newFuncArr = [];
					console.log('a');
					for(var i=0;i<funcArr.length;i++){
					   newFuncArr = newFuncArr.concat(funcArr[i].split(end));
					}
					funcArr = newFuncArr;
					//console.log(funcArr);
					newFuncArr = [];
					for(var i=0;i<funcArr.length;i++){
						if(i%2 == 0){
							newFuncArr = newFuncArr.concat(funcArr[i]);
						}
					}
					return newFuncArr.join("");
				}
				eval(item.owner+" = " + removeInstalled(eval(item.owner+".toString()")));
		}
	}
	if(typeof world.installed[name]!="undefined"){
		  world.installed[name]=undefined;
		}//else{throw new Error('Pack Already Installed');}"})(name);
}
