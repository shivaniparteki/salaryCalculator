const allowances = {
  basicsalary: 0,

// e6-2015 object short hand
  hra() {
    return this.basicsalary * 0.5;
  },
  da() {
    return this.basicsalary * 0.2;
  },
  ta() {
    return this.basicsalary * 0.3;
  },
  ma() {
    return this.basicsalary * 0.15;
  },
  pf() {
    return this.basicsalary * 0.05;
  },
  gs() {
    return this.basicsalary + this.hra() + this.da() + this.ma();
  },
  ns() {
    return this.gs() - this.pf();
  },

  // hra: function hra() {
  //   return this.basicsalary * 0.5;
  // },
  // da: function da() {
  //   return this.basicsalary * 0.2;
  // },
  // ta: function ta() {
  //   return this.basicsalary * 0.3;
  // },
  // ma: function ma() {
  //   return this.basicsalary * 0.15;
  // },
  // pf: function pf() {
  //   return this.basicsalary * 0.05;
  // },
  // gs: function gs() {
  //   return this.basicsalary + this.hra() + this.da() + this.ma();
  // },
  // ns: function ns() {
  //   return this.gs() - this.pf();
  // },
};
