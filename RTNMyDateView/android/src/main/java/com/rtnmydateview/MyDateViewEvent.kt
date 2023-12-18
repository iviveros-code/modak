package com.rtnmydateview

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.Event
import com.facebook.react.uimanager.events.RCTModernEventEmitter

class MyDateViewEvent(viewId: Int, private val date: String) : 
    Event<MyDateViewEvent>(viewId) {

      override fun getEventName(): String {
        return "topOnDatePicked"
      }

      override fun dispatchModern(rctEventEmitter : RCTModernEventEmitter?) {
          super.dispatchModern(rctEventEmitter)
          val eventData = getEventData()
          rctEventEmitter?.receiveEvent(
            viewTag, 
            getEventName(), 
            eventData
          )
      }

      override fun getEventData(): WritableMap {
        val event: WritableMap = Arguments.createMap()
        event.putString("value", date)
        return event
      }
}
