import React from 'react';
import { connect } from 'dva';
import { Icon, Row, Col } from 'antd';
import './common.less';

function IndexPage() {
  return (
    <div style={{ fontSize: 30 }}>
      <Row type="flex" align="middle" justify="center">
        <span>默认字体:</span>
        <Icon type="apple" />
        <Icon type="windows" />
        <Icon type="android" />
      </Row>
      <Row type="flex" align="middle" justify="center">
        <span>自定义字体:</span>
        <Icon type="bad-apple" />
        <Icon type="bad-windows" />
        <Icon type="bad-android" />
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
