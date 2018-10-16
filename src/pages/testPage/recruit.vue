<template>
    <div class="recruit">
        <head-nav ref="header"></head-nav>
        <tab1 class="section1" slot="info1"></tab1>
        <div class="picbox sub2">
            <img class="pic1 vm g10" src="../../assets/img/pic1.jpg" alt="">
        </div>
        <div class="titlebox sub2">
            <div class="title">
                <h2>人才招聘</h2>
                <p class="english">TALENT RECRUITMENT</p>
                <div class="line2"></div>
                <p class="tips tc">我们需要这样的人才…</p>
            </div>
            <ul class="tab">
                <li :class="{'on':item.go}" v-for="(item,index) in job" :key="index" @click="tabjob(index,item)">{{item.name}}</li>
            </ul>
        </div>

        <div class="jobbox sub3">
            <ul class="job-con" v-show="jobnum===1">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
            <ul class="job-con" v-show="jobnum===2">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：30K-35K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
            <ul class="job-con" v-show="jobnum===3">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：35K-40K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
            <ul class="job-con" v-show="jobnum===4">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：10K-40K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
            <ul class="job-con" v-show="jobnum===5">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：10K-20K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
            <ul class="job-con" v-show="jobnum===6">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：10K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
            <ul class="job-con" v-show="jobnum===7">
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：20K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
                <li class="job-list">
                    <div class="decorate1 decor"></div>
                    <div class="decorate2 decor">
                        <p class="p3">招</br>聘</br>岗</br>位</p>
                    </div>
                    <div class="jobtitle">
                        <h3>高级区块链开发工程师</h3>
                        <p class="money">职位月薪：25K-30K</p>
                    </div>
                    <dl>
                        <dt>岗位职责：</dt>
                        <dd>1、 负责公司平台产品的设计研发；</dd>
                        <dd>2、 协调和指导部分开发人员的开发工作；</dd>
                        <dd>3、 搭建基于区块链的底层架构和应用平台，能实现公链、私有链及多种逻辑，供应用层调度使用；</dd>
                        <dd>4、 能够独立进行区块链底层系统及应用平台的功能定义和架构设计,研究区块链的协议，运行机制、底层实现和应用平台研发等；</dd>
                        <dd>5、 能够根据开发计划，完成相应模块软件的设计、开发任务；</dd>
                        <dd>6、 参与核心业务系统的技术规划和业务规划工作，深入理解业务需求，抽象系统模型，进行系统设计及开发工作。</dd>
                    </dl>
                    <dl>
                        <dt>职位要求：</dt>
                        <dd>1、 计算机、数学、软件相关专业，</dd>
                        <dd>2、 5年以上开发经验，有良好的编程基础；</dd>
                        <dd>3、 熟练掌握C++, Golang中至少一种语言,有良好的编码习惯以及代码调试机器；</dd>
                        <dd>4、 熟悉linux操作系统，熟练掌握Docker容器技术的原理，部署和使用优化；</dd>
                        <dd>5、 必须具有分布式系统研发经验；</dd>
                        <dd>6、 熟悉区块链相关机制与原理以及主流产品；</dd>
                        <dd>7、 理解各类主流的共识算法，包括不限于PoW，PoS，DPoS，</dd>
                        <dd>8、 精通P2P、网络通讯、侧链/跨链、密码学、分布式技术的优先；有存储系统研发经验者优先；</dd>
                        <dd>9、 有Ethereum（以太坊），Hyperledger Fabric（超级账本），EOS 等区块链相关开发经验者优先，有加密货币或区块链技术实际实施经验的优先；</dd>
                        <dd>10、具备基于以太坊的虚拟货币交易平台或电子钱包研发经验优先。</dd>
                        <dt>有意者可以发送简历到Hr@wheatwatch.com</dt>
                    </dl>
                </li>
            </ul>
        </div>
        



        <foot-nav></foot-nav>
    </div>
</template>

<script>
    import HeadNav from '@/pages/header/myHeader'
    import FootNav from '@/pages/footer/myFooter'
    import tab1 from '@/pages/testPage/tab1'
    export default {
        data(){
            return{
                showHeader:false,
                isPhoneSize:false,
                jobnum:1,
                job:[
                    {name:"全部",go:true},
                    {name:"产品类",go:false},
                    {name:"技术类",go:false},
                    {name:"设计类",go:false},
                    {name:"市场类",go:false},
                    {name:"编辑类",go:false},
                    {name:"职能类",go:false}
                ]
            }
        },
        created(){

        },
        mounted(){
            let page =this;
            window.addEventListener("scroll",function () {
                if(page.isPhoneSize == true)return;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop>=0){
                if(page.showHeader==false && scrollTop>=300){
                    showHeader(false)
                }else if(page.showHeader==true && scrollTop<300){
                    showHeader(true);
                }else{
                    //console.log("err:"+scrollTop+" "+page.showHeader);
                }
                }
            });

            reziceCallBack();
            window.onresize = function () {
                reziceCallBack();
            }

            function reziceCallBack() {
                //console.log("resize:"+document.body.clientWidth );
                if(document.body.clientWidth <=900){
                page.isPhoneSize = true;
                showHeader(false);
                }else{
                page.isPhoneSize = false;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(page.showHeader==true && scrollTop<300){
                    showHeader(true);
                }
                }
            }

            function  showHeader(flag) {
                page.showHeader = !flag;
                //console.log("showHeader:"+flag+" "+page.showHeader)
                page.$refs.header.showHeader(flag);
            }
        },
        components:{
            HeadNav,FootNav,tab1
        },
        methods:{
            scrollTo(ele, speed){
                //console.log("last:"+ele.getAttribute("id"));
                if(!speed) speed = 500;
                if(!ele){
                $("html,body").animate({scrollTop:0},speed);
                }else{
                $("html,body").animate({scrollTop:$(ele).offset().top-80},speed);
                }
                return false;
            },
            tabjob(index,item){
                this.jobnum=index+1
                this.job.map((current,idx,arr)=>{
                    current.go=false
                })
                item.go=true
            }
        }
    }
</script>

<style>
    @import "../../assets/css/subTab.css";
    body,html {background: #f1f1f1;}
    .about .contentContainer {min-height: 50vh;}
    .section1 {background:#152d39;}
    .section1 .content {display: none;}
    .info1 {display: flex;justify-content: space-between;margin-top: 120px;align-items: center;z-index:1;}
    .info1 .chart{width: 30%;}
    .info1 .chart img{display: block;}
    .info1 .p1 {font-size: 16px;color:#fff;}

    .recruit .picbox {margin-top: -480px;z-index:1000;position: relative;}
    .recruit .titlebox {margin: 60px 0 30px 0;display: flex;justify-content: space-between;align-items: center;}
    .recruit .titlebox .title {text-align: left;text-align: center;}
    .recruit .titlebox h2{font-size: 64px;color: #173444;}
    .recruit .titlebox .english {font-size: 16px;color: #9B9B9B;}
    .recruit .titlebox .line2 {width: 180px;height: 2px;background: #1b2830;margin:8px auto 0;}
    .recruit .tab {display: flex;justify-content: center;margin-top: -60px;}
    .recruit .tab li{cursor: pointer;font-size: 16px;color: #9B9B9B;line-height: 54px;margin-left: 30px;transition:all ease 0.3s;border-bottom: 3px solid #fff;}
    .recruit .tab li:hover {color: #00001B;border-bottom: 3px solid #9B9B9B;border-bottom: 3px solid #9B9B9B;}
    .recruit .tab .on {color: #00001B;border-bottom: 3px solid #9B9B9B;}
    .recruit .tips {font-size: 20px;color: #152C39;margin-top: 30px;}

    .recruit .job-list {padding:40px 60px;background: #fff;box-shadow:0 0 20px 2px rgba(0,0,0,0.2);margin-bottom: 25px;text-align: left;position: relative;}
    .recruit .job-list h3{font-size: 18px;color: #152C39;}
    .recruit .job-list .money {font-size: 16px;color: #152C39;}
    .recruit .job-list dt{font-size: 16px;color: #4A4A4A;line-height: 30px;margin-top: 20px;font-weight: bold;}
    .recruit .job-list dd{font-size: 14px;line-height: 30px;}

    .recruit .job-list .decor {display: none;}
    .recruit .job-list:first-child .decor {display: block;}
    .recruit .decorate1 {width: 20px;height: 280px;position: absolute;right: -20px;top: -25px;background:#041c28;}
    .recruit .decorate2 {width: 100px;height: 260px;background: #244d63;text-align: center;font-size: 36px;color: #FFFFFF;line-height: 54px;position: absolute;top: -70px;
    right:-8px;display: flex;align-items: center;justify-content: center;}

    @media screen and (max-width: 750px){
        .recruit .picbox {margin-top: -300px;}
        .recruit .titlebox {display: block;margin-top: 200px;}
        .recruit .tab {margin-top: 30px;}
        .recruit .titlebox h2 {font-size: 40px;}
        .recruit .tab li {font-size: 12px;line-height: 20px;margin: 0 2%;}
        .recruit .job-list {padding:20px;}
        .recruit .job-list:first-child .decor {display: none;}
    }
    


</style>





