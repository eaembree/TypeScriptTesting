/// <reference path="../Base/base.ts" />

namespace Child {
	export class ChildClass extends Base.BaseClass {
		name:string;
		
		print(){
			alert(name + "is a ChildClass");
		}
	}
}