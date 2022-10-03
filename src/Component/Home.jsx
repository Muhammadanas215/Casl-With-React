import { Space, Table, Tag, Button, Card, Col, Row, Statistic } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, ArrowDownOutlined, ArrowUpOutlined, } from '@ant-design/icons';
import { AbilityContext, Can } from '../CASL/Can';


const Home = () => {
    let navigate = useNavigate()
    const ability = useContext(AbilityContext)
    const columns = [
        {
            title: 'Products',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <>{text}</>,
        },
        {
            title: 'Details',
            dataIndex: 'address',
            key: 'address',
        },
        ability.can('publish', 'product')
            ? {
                title: 'Publish',
                key: 'publish',
                dataIndex: 'publish',
                render: (publish, record) => (
                    <>
                        <Can I="publish" a="product">
                            <Space size="middle">
                                <Tag color={publish ? 'green' : 'red'}>
                                    {publish ? 'PUBLISH' : 'UNPUBLISH'}
                                </Tag>
                            </Space>
                        </Can>
                    </>
                ),
            }
            : {},
        ability.can('buy', 'product')
            ? {
                title: 'Buy',
                render: () => (
                    <Can I="buy" a="product">
                        <Button type="primary" size="small">
                            Buy
                        </Button>
                    </Can>
                ),
            }
            : {},
        ability.can('delete', 'product') || ability.can('edit', 'product')
            ? {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                        <>
                            <Can I="edit" a="product">
                                <EditOutlined style={{ color: '#006197' }} />
                            </Can>
                            <Can I="delete" a="product">
                                <DeleteOutlined style={{ color: '#ff6565' }} />
                            </Can>
                        </>
                    </Space>
                ),
            }
            : {},
    ]
    const data = [
        {
            key: '1',
            name: 'Phone',
            address: 'Rs 40000',
            publish: true,
        },
        {
            key: '2',
            name: 'Laptop',
            address: 'Rs 60000',
            publish: false,
        },
        {
            key: '3',
            name: 'Tablet',
            address: 'Rs 40000',
            publish: true,
        },
    ];

    const logout = (value) => {
        navigate('/')
    }

    return (
        <>
            <Button type="primary" size="small" onClick={logout}>
                Logout
            </Button>

            <Can I="view" a="statistic">
                <div style={{ margin: '50px 100px 50px 100px' }}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Active Users" value={1128993} />
                        </Col>
                        <Col span={12}>
                            <Statistic
                                title="Account Balance "
                                value={112893}
                                precision={2}
                            />
                        </Col>
                    </Row>

                    <div className="site-statistic-demo-card">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Card>
                                    <Statistic
                                        title="Active"
                                        value={11.28}
                                        precision={2}
                                        valueStyle={{
                                            color: '#3f8600',
                                        }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card>
                                    <Statistic
                                        title="Idle"
                                        value={9.3}
                                        precision={2}
                                        valueStyle={{
                                            color: '#cf1322',
                                        }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Can>

            <Table
                size="small"
                columns={columns}
                dataSource={data}
                pagination={false}
                style={{ margin: '20px' }}
            />
        </>
    )

}

export default Home;