package com.rtnmydateview

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RTNMyDateViewManagerInterface


class MyDateViewManager(private val context: ReactApplicationContext) : SimpleViewManager<MyDateView>(), RTNMyDateViewManagerInterface<MyDateView> {
    private val mDelegate: ViewManagerDelegate<MyDateView> = RTNMyDateViewManagerDelegate(this)

    override fun getDelegate() : ViewManagerDelegate<MyDateView> {
        return mDelegate
    }

    override fun getName(): String {
        return NAME
    }

    companion object {
        const val NAME = "RTNMyDateView"
    }

    override fun createViewInstance(p0: ThemedReactContext) : MyDateView {
        return MyDateView(context, context.currentActivity!!)
    }

    override fun getExportedCustomDirectEventTypeConstants(): MutableMap<String, Any>? {
        return mutableMapOf(
            "topOnDatePicked" to mutableMapOf("registrationName" to "onDatePicked")
        )
    }
}
