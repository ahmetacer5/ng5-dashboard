import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-moves',
  templateUrl: './user-moves.component.html',
  styleUrls: ['./user-moves.component.css']
})
export class UserMovesComponent implements OnInit {
  options = TREE_OPTION;
  mergeData = null;

  constructor() { }

  ngOnInit() {
    TREE_OPTION.series[0].data = [TREE_DATA_1];

    this.mergeData = {
      series: TREE_OPTION.series
    };
  }

}

const TREE_OPTION = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [{
      name: 'tree1',
      icon: 'rectangle'
    },
      {
        name: 'tree2',
        icon: 'rectangle'
      }],
    borderColor: '#c23531'
  },
  series: [
    {
      type: 'tree',
      name: 'tree1',
      data: [],
      top: '5%',
      left: '7%',
      bottom: '2%',
      right: '60%',

      symbolSize: 7,

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },

      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },

      expandAndCollapse: true,

      animationDuration: 550,
      animationDurationUpdate: 750

    }
  ]
};

const TREE_DATA_1 = {
  'name': 'mainpage',
  'children': [
    {
      'name': 'about',
    },
    {
      'name': 'login',
      'children': [
        { 'name': 'movies', 'value': 2105 },
        { 'name': 'photos', 'value': 1316 },
        { 'name': 'profile', 'value': 3151 },
        { 'name': 'dashboard', 'value': 3770,
          'children': [
            { 'name': 'logout', 'value': 2105 }
          ]}
      ]
    },
    {
      'name': 'contact',
    }
  ]
};
