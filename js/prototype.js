Number.prototype.pairImpair = function(){
	return this.valueOf() % 2 === 0;
};

String.prototype.enMajuscules = function(){
	return this.toUpperCase();
};

String.prototype.toCapitalize = function(){
	return this
			.split(' ')
			.map(function(mot){
				return mot[0].toUpperCase() + mot.substring(1);
			})
			.join(' ');
};