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
	if(!world.installed[name]){
		world.installed[name]=pack;
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
