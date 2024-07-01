import React, { memo, useEffect, useRef, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import useScrollPosition from '@/hooks/useScrollPosition'

const HeaderRight = memo(() => {
    const [showPanel, setShowPanel] = useState(false)

    useEffect(() => { // -- effect
        const windowClickHandle = () => { setShowPanel(false) }
        window.addEventListener("click", windowClickHandle, true) // -- 当点击整个浏览器窗口的位置时，对 panel 进行隐藏 --> 🔺因为当下面点击 .profile 进行显示对应的 panel 时，由于事件的冒泡也会冒泡的 window 中即又会直接将 showPanel 改回 false，为了避免 .profile 中的事件冒泡到 window 中，可以将 window 改为使用捕获 --> 即 addEventListener 第三个参数为 true
        return () => {
            window.removeEventListener("click", windowClickHandle) // -- 组件卸载 --> 对 window 上的事件取消监听
        }
    }, [])

    // -- 滚动条监听
    const { scrollY } = useScrollPosition()
    const prevY = useRef(0) // -- 记录前滚动值
    if (!showPanel) prevY.current = scrollY // -- 在正常非 search 情况下滚动，记录对应的值
    if (showPanel && Math.abs(scrollY - prevY.current) > 30) setShowPanel(false)

    return (
        <RightWrapper>
            <div className="btns">
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <IconGlobal />
                </span>
            </div>
            <div className="profile" onClick={e => setShowPanel(true)}>
                <div className="menu">
                    <IconProfileMenu />
                </div>
                <IconProfileAvatar />

                {showPanel && (
                    <div className="panel">
                        <div className="top">
                            <span className='text'>登录</span>
                            <span className='text'>注册</span>
                        </div>
                        <div className="bottom">
                            <span className='text'>帮助中心</span>
                        </div>
                    </div>
                )
                }
            </div>
        </RightWrapper>
    )
})

export default HeaderRight